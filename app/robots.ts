import { MetadataRoute } from "next";

export default  function robots(): MetadataRoute.Robots{
        // تصدير دالة `robots` التي تُرجع إعدادات ملف `robots.txt` لتوجيه محركات البحث

    return{
        rules:[
            {
                userAgent:"*",
                allow:'/',
                
                // disallow:["/privacy-policy"]
            }
        ],
        // sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    }
}