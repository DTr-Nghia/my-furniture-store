import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
    const {
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            max_price,
            price,
            shipping,
        },
        updateFilters,
        clearFilters,
        all_products,
    } = useFilterContext()
    const categories = getUniqueValues(all_products,'category')
    const colors = getUniqueValues(all_products,'colors')
    const companies = getUniqueValues(all_products,'company')
    return <Wrapper>
        <div className="content">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-control">
                    <input type="text" name="text" placeholder='search' className="search-input" value={text} onChange={updateFilters} autoComplete='off'/>
                </div>
                <div className="form-control">
                    <h5>company</h5>
                        <select name="company" value={company} onChange={updateFilters} className="company">
                            {companies.map((company,index) => {
                                return <option value={company} key={index}>{company}</option>
                            })}
                        </select>
                </div>
                <div className="form-control">
                    <h5>category</h5>
                    <div className="category">
                        {categories.map((c,index) => {
                            return <button key={index}
                            onClick={updateFilters}
                            type="button"
                            name="category"
                            className={`${category === c.toLowerCase() ? 'single-category active': 'single-category'}`}
                            >{c}</button>
                        })}
                    </div>
                </div>
                <div className="form-control">
                    <h5>colors</h5>
                    <div className="colors">
                        {colors.map((c,index) => {
                            if(c === 'all'){
                                return <button key={index} name="color" onClick={updateFilters} data-color ="all" className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}>all</button>
                            }
                            return <button 
                            key={index} 
                            name="color" 
                            onClick={updateFilters} 
                            data-color={c}
                            style={{background:c}}
                            className={`${color === c ? 'color-btn active' : 'color-btn'}`}
                            >
                                {color === c ? <FaCheck/> : null}
                            </button>
                        })}
                    </div>
                </div>
                <div className="form-control">
                    <h5>price</h5>
                    <p className="price">{formatPrice(price)}</p>
                    <input 
                    type="range" 
                    name="price"
                    onChange={updateFilters}
                    min={min_price}
                    max={max_price}
                    value={price}
                     />
                </div>
                <div className="form-control shipping">
                    <label htmlFor="shipping">free shipping</label>
                    <input type="checkbox" name="shipping" id="shipping" onChange={updateFilters} checked={shipping}/>
                </div>
            </form>
            <button className="clear-btn" type="button" onClick={clearFilters}>clear all</button>
        </div>
    </Wrapper>
}
const Wrapper = styled.section`
    .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      color:var(--clr-primary-5);
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    outline: none;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
    :hover {
      color: var(--clr-black);
    }
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    outline: none;
    font-size: 1rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-transform: capitalize;
    font-size: 1rem;
    input {
      margin-top: 5px;
    }
    label {
      color: var(--clr-primary-5);
      font-weight: bold;
    }
  }
  .clear-btn {
    background: var(--clr-tertiary);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
  @media (max-width: 576px) {
    .search-input {
      width: 100%;
    }
    .category {
        display: flex;
        flex-wrap: wrap;
      .single-category{
        margin-right: 1.25rem;
      }
    }
  }
`
export default Filters