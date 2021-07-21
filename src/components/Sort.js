import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'

const Sort = () => {
    const {filtered_products:products,grid_view,setGridview,setListview,updateSort} = useFilterContext()
    return (
        <Wrapper>
            <div className="btn-container">
                <button type='button' className={`${grid_view ? 'active': null}`} onClick={setGridview}>
                    <BsFillGridFill/>
                </button>
                <button type='button' className={`${!grid_view ? 'active': null}`} onClick={setListview}>
                    <BsList/>
                </button>
            </div>
            <p>{products.length} products found</p>
            <hr />
            <form >
                <label htmlFor="sort">
                    sort by
                </label>
                <select name="sort" id="sort" className="sort-input" onChange={updateSort}>
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a-z)</option>
                    <option value="name-z">name (z-a)</option>
                </select>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.section` 
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    column-gap: 2rem;
    @media (max-width: 576px) {
        display:grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;
        .btn-container {
            width: 50px;
        }
        label {
            display:inline-block;
            margin-bottom: 2rem;
        }
    }
        p {
            text-transform: capitalize;
            margin-bottom: 0;
            color: var(--clr-primary-5);
        }
        .btn-container {
            display:flex;
            gap: 0.5rem;
            button {
                background: transparent;
                border: 2px solid var(--clr-primary-5);
                color: var(--clr-primary-5);
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: var(--transition);
                svg {
                    font-size: 1rem;
                }
                :hover {
                    background:var(--clr-primary-5);
                    color:var(--clr-background-1);
                }
            }
            .active {
                background:var(--clr-primary-5);
                color:var(--clr-background-1);
            }
            }
            .sort-input {
                border-color: transparent;
                outline: none;
                font-size: 1rem;
                text-transform: capitalize;
                padding: 0.25rem 0.5rem;
                margin-left: 0.5rem;
            }
            label {
                font-size: 1rem;
                text-transform: capitalize;
                color: var(--clr-primary-5);
            }
`
export default Sort