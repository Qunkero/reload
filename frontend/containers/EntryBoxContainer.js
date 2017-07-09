import React from 'react'
import { connect } from 'react-redux'
import EntryBox from '../components/EntryBox';


let EntryBoxContainer = () =>{
    return <EntryBox/>
};


EntryBoxContainer = connect()(EntryBoxContainer);

export default EntryBoxContainer;

