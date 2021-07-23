import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    
    const API = 'http://localhost:3000/initalState';
    const initialState = useInitialState(API);
    return(
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 &
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
            }
           
            
            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialState.trends.map(item => 
                            <CarouselItem key={item.id} {...item}/>
                        )
                    }
                    
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>
                    {
                        initialState.originals.map(item => 
                            <CarouselItem key={item.id} {...item}/>
                        )
                    }
                    
                </Carousel>
            </Categories>
            
            <Footer />
        </div>
    );
}

export default App;