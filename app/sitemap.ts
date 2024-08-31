import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
   
    return[
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
// تعيين عنوان URL الرئيسي للموقع باستخدام متغير البيئة NEXT_PUBLIC_BASE_URL

            priority: 1,
// تعيين أولوية الصفحة في خريطة الموقع. القيمة 1 تعني أنها ذات أولوية عالية (الصفحة الرئيسية عادةً ما تكون ذات أولوية أعلى)

        },
    ]
}