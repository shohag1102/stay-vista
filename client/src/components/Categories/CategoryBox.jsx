import React from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import qs from 'query-string'

const CategoryBox = ({label, icon: Icon, selected}) => {
    let [params, setParams] = useSearchParams()
    let navigate = useNavigate()
    let handleNavigate = (label) => {
        let currentQuery = {}
        if (params) {
            // console.log('params ', params)
            currentQuery = qs.parse(params.toString())
            // console.log('current query', currentQuery)
            const updatedQuery = {...currentQuery, category: label}
            // console.log('updatedQuery', updatedQuery)
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            // console.log('url ', url)
            navigate(url)
        }
    }
    return (
        <div
            className={`flex flex-col gap-2 p-3 items-center justify-center cursor-pointer hover:text-neutral-200 border-b-2 transition  ${selected ? "border-b-neutral-800 text-neutral-800" : ""}`}
            onClick={() => handleNavigate(label)}
        >
            <Icon size={26}/>
            <div className="font-medium text-sm">{label}</div>
        </div>
    );
};

export default CategoryBox;