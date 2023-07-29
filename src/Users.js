import React, { useState } from 'react'

const Users = () => {
    const [data] = useState([
        {
            "id": 1,
            "firstName": "Terry",
            "lastName": "Medhurst",
            "maidenName": "Smitham",
            "age": 50,
            "gender": "male",
            "email": "atuny0@sohu.com",
            "phone": "+63 791 675 8914",
            "username": "atuny0",
        },
        {
            "id": 2,
            "firstName": "Sheldon",
            "lastName": "Quigley",
            "maidenName": "Cole",
            "age": 28,
            "gender": "male",
            "email": "hbingley1@plala.or.jp",
            "phone": "+7 813 117 7139",
            "username": "hbingley1",
        },
        {
            "id": 3,
            "firstName": "Terrill",
            "lastName": "Hills",
            "maidenName": "Hoeger",
            "age": 38,
            "gender": "male",
            "email": "rshawe2@51.la",
            "phone": "+63 739 292 7942",
            "username": "rshawe2",
        },
        {
            "id": 4,
            "firstName": "Miles",
            "lastName": "Cummerata",
            "maidenName": "Maggio",
            "age": 49,
            "gender": "male",
            "email": "yraigatt3@nature.com",
            "phone": "+86 461 145 4186",
            "username": "yraigatt3",
        },
        {
            "id": 5,
            "firstName": "Mavis",
            "lastName": "Schultz",
            "maidenName": "Yundt",
            "age": 38,
            "gender": "male",
            "email": "kmeus4@upenn.edu",
            "phone": "+372 285 771 1911",
            "username": "kmeus4",
        },
        {
            "id": 6,
            "firstName": "Alison",
            "lastName": "Reichert",
            "maidenName": "Franecki",
            "age": 21,
            "gender": "female",
            "email": "jtreleven5@nhs.uk",
            "phone": "+351 527 735 3642",
            "username": "jtreleven5",
        },
        {
            "id": 5,
            "firstName": "Mavis",
            "lastName": "Schultz",
            "maidenName": "Yundt",
            "age": 38,
            "gender": "male",
            "email": "kmeus4@upenn.edu",
            "phone": "+372 285 771 1911",
            "username": "kmeus4",
        },
        {
            "id": 6,
            "firstName": "Alison",
            "lastName": "Reichert",
            "maidenName": "Franecki",
            "age": 21,
            "gender": "female",
            "email": "jtreleven5@nhs.uk",
            "phone": "+351 527 735 3642",
            "username": "jtreleven5",
        },
        {
            "id": 2,
            "firstName": "Sheldon",
            "lastName": "Quigley",
            "maidenName": "Cole",
            "age": 28,
            "gender": "male",
            "email": "hbingley1@plala.or.jp",
            "phone": "+7 813 117 7139",
            "username": "hbingley1",
        },
    ])
    return (

        <div className='container'>
            <div className='row'>
                {data.map((user, index) =>
                    <div className='col-lg-4' key={index}>
                        <div className='card mt-5'>
                            <div className="card-body">

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>Id</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.id}</div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>First Name</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.firstName}</div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>Last Name</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.lastName}</div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>Maiden Name</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.maidenName}</div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>Age</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.age}</div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>Gender</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.gender}</div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>Email</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.email}</div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-5 col-md-5 col-sm-4 child'>Phone Number</div>
                                    <div className='col-lg-7 col-md-5 col-sm-4 child'>: {user.phone}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Users