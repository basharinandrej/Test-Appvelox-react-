import React from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux'


import Aside from './components/Aside'
import Header from './components/Header';
import MyProfile from './pages/MyProfilePage'
import CalendaryPage from './pages/CalendaryPage'
import PagePlug from './pages/pagePlug'
import { fetchRecords } from './redux/actions/records'
import { fetchDate } from './redux/actions/dateAction'




const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecords())
        dispatch(fetchDate())
    })



    return (
        <div className="body__content content">

		<Aside />

		<div className="content__overflow"></div>

		<main className="content__main-main main-main">
            <div className="main-main__container container">
                <Header />

				{/* Роутинг */}
                <Switch>
                    <Route  path='/' exact component={MyProfile} />
                    <Route  path='/calendary' component={CalendaryPage} />
                    <Route  path='/doctors' component={PagePlug} />
                    <Route  path='/message' component={PagePlug} />
                    <Route  path='/testing' component={PagePlug} />
                    <Route  path='/think' component={PagePlug} />
                </Switch>
            </div>
        </main>
	</div>
    )


	



}

export default App;