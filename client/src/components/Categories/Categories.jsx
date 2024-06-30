import {categories} from "./CategoriesData.js";
import Container from "../Shared/Container.jsx";
import CategoryBox from "./CategoryBox.jsx";
import {useSearchParams} from "react-router-dom";


const Categories = () => {
    let [params, setParams] = useSearchParams()
    let category = params.get('category')
    return (<Container>
        <div className={"flex justify-between pt-4 items-center overflow-y-auto"}>
            {categories.map(item => <CategoryBox key={item.label} icon={item.icon}
                                                     label={item.label} selected={category === item.label}/>)}
        </div>
    </Container>);
};

export default Categories;