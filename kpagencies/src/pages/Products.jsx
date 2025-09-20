import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Productitem from "../components/Productitem";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { product } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [searchParams] = useSearchParams();
  const [showSearch,setShowsearch]= useState(false);
  const [search,setSearch]=useState('');

  useEffect(() => {
    const mySubCategory = searchParams.get("subcategory");
    if (mySubCategory) {
      setSubCategory(mySubCategory || "");
    }
  }, [searchParams]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (category.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = product.slice();

    if(showSearch && search){
      
      productCopy=productCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()));
      
    }
    if (category.length > 0) {
      
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
  
    setFilteredProducts(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();
    switch (sortType) {
      case "lowtohigh":
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "hightolow":
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch,product]);

  return (
    <div>
      <div className={`bg-slate-200 h-16   flex flex-row justify-center items-center  transition-all ease-in-out gap-4 ${showSearch?"w-full p-2 ":"hidden "}`}> 
        <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} className={`p-2 w-4xl border-slate-400 border-2 ${showSearch?" ":"hidden "}`} />
        <img src={assets.close} className="w-6 h-6 cursor-pointer" onClick={()=>setShowsearch(false)} />
      </div>
    <div className="flex flex-col sm:flex-row p-4 lg:px-20 ">
      

      
      <div className="min-w-[20%] mt-8">
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="flex flex-row gap-2 pb-3 cursor-pointer items-center"
        >
          <p className="font-extrabold text-2xl text-amber-800 playwrite-hu">Filters</p>
          <img
            src={assets.arrow}
            className={`w-4 h-5  sm:hidden ${showFilter ? "" : "rotate-270"}`}
          />
        </div>
        <div
          className={`border-2 border-amber-200 p-4 shadow-xl shadow-grey ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="p-2 font-extrabold text-xl underline text-amber-800 playwrite-hu">
            Categories
          </p>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              value={"Fruitomans"}
              onChange={toggleCategory}
            />
            <p>Fruitomans</p>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" value={"MTR"} onChange={toggleCategory} />
            <p>MTR</p>
          </div>
        </div>
        <div
          className={`border-2 border-amber-200 p-4 mt-4 shadow-xl shadow-grey ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="p-2 font-extrabold text-xl underline text-amber-800 playwrite-hu">
            Sub-Categories
          </p>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              value={"Spices"}
              onChange={toggleSubCategory}
              checked={subCategory.includes("Spices")}
            />
            <p>Spices & Masalas</p>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              value={"Ready"}
              onChange={toggleSubCategory}
              checked={subCategory.includes("Ready")}
            />
            <p>Ready-to-eat Meals</p>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              value={"Jams"}
              onChange={toggleSubCategory}
              checked={subCategory.includes("Jams")}
            />
            <p>Jams & Fruit Spreads</p>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              value={"Pickles"}
              onChange={toggleSubCategory}
              checked={subCategory.includes("Pickles")}
            />
            <p>Pickles & Condiments</p>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              value={"Instant"}
              onChange={toggleSubCategory}
              checked={subCategory.includes("Instant")}
            />
            <p>Instant Mixes & Batter</p>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              value={"Squahes"}
              onChange={toggleSubCategory}
              checked={subCategory.includes("Squashes")}
            />
            <p>Squashes & Syrups</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between ">
          <p className="font-extrabold text-2xl text-amber-800 mx-auto relative playwrite-hu">
            All Products
          </p><div className="flex flex-row gap-5 items-center">
            
            <img src={assets.search} className="w-6 h-6 cursor-pointer"  onClick={()=>setShowsearch(true)}/>
            
            <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-amber-500 border p-2"
          >
            <option value="relevant">Sort By: Relevance</option>
            <option value="lowtohigh">Sort By: Low-to-High</option>
            <option value="hightolow">Sort By: High-to-Low</option>
          </select></div>
          
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 space-y-8 space-x-8 lg:m-12">
          {filteredProducts.map((item, index) => (
            <Productitem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div></div>
  );
};

export default Products;
