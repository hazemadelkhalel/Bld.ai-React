import React, { Component } from 'react';
import './static/style/index.css';
import Reviewdetalis from './reviewdetalis';


class Reviews extends Component {
    
    render() { 
        return (
            <div className='Reviews'>
                <h1 className='ReviewsBanner'>Reviews</h1>
                <div className='searchingReview'>
                    <div className='searchDiv'>
                        <form className="ReviewSearch">        
                        <button type="submit" id="search-btn" className="ReviewSearch-icon" onclick="filterFunction2()"></button>
                        <input  id = "searchbar" type="text" title="Search" placeholder="Search reviews" onkeyup="cleanSearch()"></input>
                        </form>
                    </div>
                    <div>
                        <select className='selectDiv'>
                            <option value="default">All ratings</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <Reviewdetalis/>
                <Reviewdetalis/>
                <Reviewdetalis/>
                <Reviewdetalis/>
                <Reviewdetalis/>
                <Reviewdetalis/>
                <Reviewdetalis/>
                <div className='seemore'>
                <button className='btnseemore' type='submit'> See more reviews </button>
                </div>
            </div>
         );
    }
}
 
export default Reviews;