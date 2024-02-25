import React from 'react'
import './SearchPage.css'
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider'
import Search from './Searchs'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useGoogleSearch from './useGoogleSearch';


const SearchPage = () => {
    const [{term},dispatch]=useStateValue();
    const {data}=useGoogleSearch(term);
    // const data=response;
    console.log(data);
  return (
    <div className='SearchPage'>
        <div className='SearchPage__header'>
            <Link to="/">
            <img
              className="SearchPage__logo"
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
              alt=''
            />
            </Link>
            <div className='SearchPage__headerBody'>
                <Search hideButtons/>
                <div className='searchPage__options'>
                    <div className='searchPage__optionLeft'>
                      <div className='searchPage__option'> 
                          <SearchIcon />
                          <Link to="/all">All</Link>
                      </div>
                      <div className='searchPage__option'> 
                          <DescriptionIcon />
                          <Link to="/news">News</Link>
                      </div>
                      <div className='searchPage__option'> 
                          <ImageIcon />
                          <Link to="/images">Images</Link>
                      </div>
                      <div className='searchPage__option'> 
                          <LocalOfferIcon />
                          <Link to="/shopping">shopping</Link>
                      </div>
                      <div className='searchPage__option'> 
                          <RoomIcon />
                          <Link to="/maps">maps</Link>
                      </div>
                      <div className='searchPage__option'> 
                          <MoreVertIcon />
                          <Link to="/more">more</Link>
                      </div>
                    </div>
                    <div className='searchPage__optionRight'>
                      <div className='searchPage__option'>
                        <Link to="/settings">Settings</Link>
                      </div>
                      <div className='searchPage__option'>
                        <Link to="/tools">Tools</Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        {term &&(
        <div className='searchPage_results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults}results({data?.searchInformation.formattedSearchTime}second) for {term}
          </p>
          {data?.items.map(item=>(
            <div className='searchPage__result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src &&(
                  <img className='searchPage__resultImage'
                  src={
                    item.pagemap?.cse_image[0]?.src
                  } alt="" />
                )}
                {item.displayLink}
              </a>
              <a className='searchPage__resultTitle' href={item.link}
              >
                <h2>
                  {item.title}
                </h2>
               </a>
               <p className='searchPage__resultSnippet'>
                {item.snippet}
               </p>
                
            </div>
          ))}
        </div>
        )}
    </div>
  )
}

export default SearchPage