
import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import BiggestInfluencer from './BiggestInfluencer';

function App() {


    //! API Configs 

    const api = axios.create({ baseURL: 'http://localhost:3001' })

    const getSubscribers = async () => {
        try {
            const response = await api.get(`/subscribers`);
            return response.data
        } catch (error) {
            throw error;
        }
    }

    const getSubscriber = async (id) => {
        try {
            const response = await api.get(`/subscribers/${id}`);
            return response.data
        } catch (error) {
            throw error;
        }
    }

    const createSubscriber = async (subscriber) => {
        try {
            const response = await api.post('/subscribers', subscriber)
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }

    const updateSubscriberReferralCount = async (id, subscriber) => {
        try {
            const response = await api.put(`/subscribers/${id}`, subscriber)
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }


    //! States and Functions: 

    const [allSubscribers, setAllSubscribers] = useState();
    const [newReferralID, setNewReferralID] = useState();
    const [newEmail, setNewEmail] = useState();
    const [countArray, setCountArray] = useState([]);

    useEffect(async () => {
        const products = await getSubscribers();
        setAllSubscribers(products)
    }, [])


    const newSubscriber = (email) => {
        const newreferralID = uuidv4()
        let found = allSubscribers.find(element => element.email === email);
        console.log(found)
        // if (found.email) {
        //     alert("email Exists")
        //     return;
        // }
        // else {
        alert(`Give this ID to the next user. Your referral ID is: ${newReferralID}`)
        return {
            id: newReferralID,
            email: email,
            referralCount: 0
        }
        // }
    }

    const checkReferral = (e) => {
        // e.preventDefault();

        if (newEmail == null) {
            alert("please enter email");
        } else if (newReferralID == null) {
            alert("please enter Referral ID")
        }

        else {
            allSubscribers.find(element => {
                if (element.id === newReferralID) {
                    alert(`Referred User Email found: ${element.email}`);
                    updateSubscriberReferralCount(element.id, { referralCount: element.referralCount + 1 })
                    const registered = newSubscriber(newEmail)
                    console.log(registered)
                    return createSubscriber(registered)
                }
            })
        }
    }

    return (
        <div className="App">
            <p>Use 3323sac213manslkdfghry6rgdfgf4123aljkmcalqkjb41 as your <span style={{ fontWeight: "bolder" }}>first</span> referral code</p>
            {/* <BiggestInfluencer allSubscribers={allSubscribers} /> */}
            <form id="form1" onSubmit={checkReferral}>
                <label htmlFor="email"> Email: </label>
                <input type="text" id="email" name="email" value={newEmail} onChange={e => { setNewEmail(e.target.value) }} />
                <label htmlFor="referral"> Referral ID: </label>
                <input type="text" id="referral" name="referral" value={newReferralID} onChange={e => { setNewReferralID(e.target.value) }} />
            </form>
            <button type="submit" form="form1" value="submit">Submit</button>

            {allSubscribers &&
                allSubscribers.map(user => {
                    return (
                        <>
                            <p key="2">Email: {user.email}, Referrals: {user.referralCount}</p>
                        </>
                    )
                })
            }
        </div>
    );
}

export default App;
