import SingleCategoryCard from "@/components/SingleCategoryCard";
import { fetchCategories } from "@/utils/fetch/categories";

export default async function Page({ params }) {
    const { title } = await params;
    const categoryData = await fetchCategories()
    console.log(categoryData);
    
    const category = categoryData?.categories?.find((category) => category.title == title);
    console.log(category);
    

    return (
        <div>
            <SingleCategoryCard category={category} />
        </div>
    );
}