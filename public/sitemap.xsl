<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap - Global Digital Experts</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
                        color: #333;
                        margin: 0;
                        padding: 2rem;
                    }
                    a {
                        color: #0051C3;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    .header {
                        background: #f4f4f4;
                        padding: 2rem;
                        margin: -2rem -2rem 2rem;
                        text-align: center;
                        border-bottom: 1px solid #ddd;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 1.5rem;
                        color: #333;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 1rem;
                    }
                    th {
                        background: #f4f4f4;
                        padding: 1rem;
                        text-align: left;
                        font-weight: 600;
                        border-bottom: 2px solid #ddd;
                    }
                    td {
                        padding: 1rem;
                        border-bottom: 1px solid #eee;
                        vertical-align: top;
                    }
                    tr:hover td {
                        background: #f9f9f9;
                    }
                    .url {
                        width: 50%;
                    }
                    .lastmod {
                        width: 25%;
                    }
                    .changefreq, .priority {
                        width: 12.5%;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>XML Sitemap</h1>
                    <p>Global Digital Experts - Canada Jobs with Visa Sponsorship</p>
                </div>
                <table>
                    <tr>
                        <th class="url">URL</th>
                        <th class="lastmod">Last Modified</th>
                        <th class="changefreq">Change Frequency</th>
                        <th class="priority">Priority</th>
                    </tr>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                        <tr>
                            <td class="url">
                                <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                                <xsl:if test="image:image">
                                    <br/><small>Has image: <xsl:value-of select="image:image/image:title"/></small>
                                </xsl:if>
                            </td>
                            <td class="lastmod"><xsl:value-of select="sitemap:lastmod"/></td>
                            <td class="changefreq"><xsl:value-of select="sitemap:changefreq"/></td>
                            <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
