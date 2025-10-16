"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function UnreadCounter() {
  const [unreadCount, setUnreadCount] = useState(0)

  const fetchUnreadCount = async () => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('id', { count: 'exact' })
        .eq('replied', false)

      if (error) {
        console.error('Error fetching unread count:', error)
        return
      }

      setUnreadCount(data.length)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // Fetch initial count
  useEffect(() => {
    fetchUnreadCount()

    // Subscribe to changes in form_submissions table
    const channel = supabase
      .channel('form_submissions_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'form_submissions'
        },
        () => {
          // Refetch count when any change occurs
          fetchUnreadCount()
        }
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [])

  if (unreadCount === 0) return null

  return (
    <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
      {unreadCount}
    </div>
  )
}
