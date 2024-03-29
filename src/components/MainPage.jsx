import { Divider, Grid } from "@mui/material";
import Left from "./Left";
import Right from "./Right";
import { useEffect, useState } from "react";
import DefaultUserIcon from "../Icons/LeftTopNavigationIcons";
import DefaultRightPannel from "./DefaultRightPannel";

export default function MainPage() {
    const [allButtons, setAllButtons] = useState(
        {
            "personalProfileIcon": false,
            "searchIcon": true,
            "backIcon": false,
        }
    )

    function allButtonsSetter(buttonName, buttonValue) {
        setAllButtons((oldButtonsStatus) => ({
            ...oldButtonsStatus,
            [buttonName]: buttonValue,
        }))
    }

    const [searchText, setSearchText] = useState('')

    const [personalInfo, setPersonalInfo] = useState(
        {
            "name": "Ashutosh Verulkar",
            "profilePicture": "",
            "countryCode": "+91",
            "mobileNo": "7218724953",
            "about": "I am not perfect but I am limited edition",
            "chats": ""
        }
    )

    function personalInfoSetter(info, infoValue) {
        setPersonalInfo((oldPersonalInfo) => ({
            ...oldPersonalInfo,
            [info]: infoValue,
        }))
    }

    const [chats, setChats] = useState([
        {
            "messageId": 1,
            "messageText": 'hii',
            "messageTime": "13:28",
            "messageDate": '2/9/2024',
            "userMobileNo": '9673524106',
            "deliverdStatus": true,
            "readStatus": true,
        },

        {
            "messageId": 2,
            "messageText": 'bye',
            "messageTime": "13:29",
            "messageDate": '2/10/2024',
            "userMobileNo": '7744938053',
            "deliverdStatus": true,
            "readStatus": false,
        },

        {
            "messageId": 3,
            "messageText": 'kay',
            "messageTime": "13:48",
            "messageDate": '2/10/2024',
            "userMobileNo": '9673524106',
            "deliverdStatus": false,
            "readStatus": false,
        },
        {
            "messageId": 4,
            "messageText": 'hello',
            "messageTime": "01:28",
            "messageDate": '2/11/2024',
            "userMobileNo": '9673524106',
            "deliverdStatus": true,
            "readStatus": false,
        },
        {
            "messageId": 5,
            "messageText": 'good morning',
            "messageTime": "13:28",
            "messageDate": '2/12/2024',
            "userMobileNo": '7744938053',
            "deliverdStatus": true,
            "readStatus": false,
        },
        {
            "messageId": 6,
            "messageText": 'goodnight',
            "messageTime": "13:28",
            "messageDate": '2/14/2024',
            "userMobileNo": '9673524106',
            "deliverdStatus": true,
            "readStatus": true,
        },
        {
            "messageId": 7,
            "messageText": 'goodnight',
            "messageTime": "13:28",
            "messageDate": '2/14/2024',
            "userMobileNo": '9673524106',
        },
        {
            "messageId": 8,
            "messageText": 'goodnight',
            "messageTime": "13:28",
            "messageDate": '2/14/2024',
            "userMobileNo": '9673524106',
        },
        {
            "messageId": 9,
            "messageText": 'goodnight',
            "messageTime": "13:28",
            "messageDate": '2/14/2024',
            "userMobileNo": '9673524106',
        },
        {
            "messageId": 10,
            "messageText": 'goodnight',
            "messageTime": "13:28",
            "messageDate": '2/14/2024',
            "userMobileNo": '9673524106',
        }
    ])

    function updateUsers(obj) {
        setChats([...chats, obj]);
        makeMessageReadAndDelivered()
    }

    function makeMessageReadAndDelivered() {
        const lastChatIndex = chats.length - 1;

        if (lastChatIndex >= 0 && chats[lastChatIndex].deliverdStatus) {
            setTimeout(() => {
                setChats((prevChats) =>
                    prevChats.map((chat, index) =>
                        index === lastChatIndex ? { ...chat, deliverdStatus: true } : chat
                    )
                );
            }, 5000);

            setTimeout(() => {
                setChats((prevChats) =>
                    prevChats.map((chat, index) =>
                        index === lastChatIndex ? { ...chat, readStatus: true } : chat
                    )
                );
            }, 10000);
        }
    }

    // useEffect(() => {
    //     setChats([...chats, message]);

    //     setUsers((oldUsers) =>
    //         oldUsers.map((user) =>
    //             user.userMobileNo === message.receiverMobileNo
    //                 ? {
    //                     ...user,
    //                     userMessages: user.userMessages.includes(message.messageId)
    //                         ? user.userMessages
    //                         : [...user.userMessages, message.messageId],
    //                 }
    //                 : user
    //         )
    //     );
    // }, [message]);


    // useEffect(() => {
    //     setTimeout(() => {
    //         // setChats((prevChats) =>
    //         //     prevChats.map((chat) =>
    //         //         chat.messageId === newChatId ? { ...chat, deliverdStatus: true } : chat
    //         //     )
    //         // );

    //         setChats((prevChats) =>
    //             prevChats.map((chat, index) =>
    //                 index === prevChats.length - 1 ? { ...chat, deliverdStatus: true } : chat
    //             )
    //         );
    //     }, 5000);
    //     setTimeout(() => {
    //         // setChats((prevChats) =>
    //         //     prevChats.map((chat) =>
    //         //         chat.messageId === newChatId ? { ...chat, readStatus: true } : chat
    //         //     )
    //         // );

    //         setChats((prevChats) =>
    //             prevChats.map((chat, index) =>
    //                 index === prevChats.length - 1 ? { ...chat, readStatus: true } : chat
    //             )
    //         );
    //     }, 10000);
    // }, [chats])




    const [users, setUsers] = useState([
        {
            "userName": "Rameshwar Varpe",
            "profilePicture": "",
            "countryCode": "+91",
            "userMobileNo": "9673524106",
            "userAbout": "Urgent calls only",
            "userLastSeen": "15:23",
            "userLastMessage": "",
            "userUnreadMessages": "8",
        },
        {
            "userName": "Harshal Dhokane",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/425129692_689143370096096_5853688436436413836_n.jpg?ccb=11-4&oh=01_AdS1_cEWdewmQJNLrvr5rhTFCL8OWPN600Z5p0be3honrw&oe=65D70026&_nc_sid=e6ed6c&_nc_cat=104",
            "countryCode": "+91",
            "userMobileNo": "7744938053",
            "userAbout": "Sleeping",
            "userLastSeen": "14:23",
            "userLastMessage": "",
            "userUnreadMessages": "9",
        },
        {
            "userName": "Sanket Gupta",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/422481063_763291511911523_3485251882021467671_n.jpg?ccb=11-4&oh=01_AdTu-UmaGIOyDHhUCoaqFD6fohwRqMxzkpOglMDYTqYKaA&oe=65D39B50&_nc_sid=e6ed6c&_nc_cat=104",
            "countryCode": "+91",
            "userMobileNo": "8329086681",
            "userAbout": "EVERYDAY IN EVERYWAY I'M GETTING BETTER AND BETTER 😇",
            "userLastSeen": "03:00",
            "userLastMessage": "",
            "userUnreadMessages": "",
        },
        {
            "userName": "Abhishek Chopade",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/312280415_693376235414492_8643811253461028228_n.jpg?ccb=11-4&oh=01_AdRvjs-c305nvIRH0Zk6FZT044yIFGHzryVvpgJT72Qknw&oe=65D78539&_nc_sid=e6ed6c&_nc_cat=102",
            "countryCode": "+91",
            "userMobileNo": "9766764627",
            "userAbout": "At work",
            "userLastSeen": "05:00",
            "userLastMessage": "",
            "userUnreadMessages": "",
        },
        {
            "userName": "Prajwal Ingole",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/366895269_1281219732765291_2344527761445279511_n.jpg?ccb=11-4&oh=01_AdTgEf22MZXMwBhjnqh_IK1cJeXRT6c1n7IGdk6fjzvGMQ&oe=65D78738&_nc_sid=e6ed6c&_nc_cat=103",
            "countryCode": "+91",
            "userMobileNo": "9075809004",
            "userAbout": "Battery about to die",
            "userLastSeen": "24:00",
            "userLastMessage": "",
            "userUnreadMessages": "",
        },
        {
            "userName": "Nikhilesh Mane",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/379727675_1379561979616037_7922129445927542609_n.jpg?ccb=11-4&oh=01_AdRTfAs4DKjvazSPotZLZL2peIym2qNKzmmebs0BZjS_RQ&oe=65D6C6EE&_nc_sid=e6ed6c&_nc_cat=107",
            "countryCode": "+91",
            "userMobileNo": "9075490251",
            "userAbout": "कुळ-हिंदुत्व👑 सण-शिवजयंती💥 रुबाब-मराठा💪 शान-भगवा झेंडा🚩 दैवत-छत्रपती शिवाजी महाराज🙏 जन्मभूमी- अमरावती🚩 आमच ईमान स्वराज्य 🔱",
            "userLastSeen": "23:00",
            "userLastMessage": "",
            "userUnreadMessages": "",
        },
        {
            "userName": "Aditya",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/383670737_350499304234701_3256428619540089720_n.jpg?ccb=11-4&oh=01_AdRZlCAB99R3jLn-V1nFg2_aos87f9K-iAFN8H0wIS2b_A&oe=65D6C99F&_nc_sid=e6ed6c&_nc_cat=108",
            "countryCode": "+91",
            "userMobileNo": "8668559528",
            "userAbout": "पंख त्यांचेच मजबूत असतात जे एकटे उडतात, आणि प्रवाहाविरुद्ध झेप घेतात.",
            "userLastSeen": "01:27",
            "userLastMessage": "",
            "userUnreadMessages": "9",
        },
        {
            "userName": "Om Chokhat",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/412096892_3622341318094188_2561229067796895047_n.jpg?ccb=11-4&oh=01_AdR7fsboa4T8Qyl-exEi5MVdR6E2Z9CY1yoMWBbk10uuEQ&oe=65D36CA6&_nc_sid=e6ed6c&_nc_cat=111",
            "countryCode": "+91",
            "userMobileNo": "9284486105",
            "userAbout": "🏢CIVIL 😎",
            "userLastSeen": "",
            "userLastMessage": "",
            "userUnreadMessages": "5",
        },
        {
            "userName": "Mangesh Ganjare",
            "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/421376558_1452364815350883_4050033814544328015_n.jpg?ccb=11-4&oh=01_AdTwf9-ybt9LPz_69bAcB14uLJ2yjKBedfMOJMwzk1Jcfw&oe=65D775A7&_nc_sid=e6ed6c&_nc_cat=108",
            "countryCode": "+91",
            "userMobileNo": "9767746080",
            "userAbout": "At work",
            "userLastSeen": "",
            "userLastMessage": "",
            "userUnreadMessages": "8",
        },
        {
            "userName": "Prathamesh Gode",
            "profilePicture": "",
            "countryCode": "+91",
            "userMobileNo": "8208210160",
            "userAbout": "Available",
            "userLastSeen": "",
            "userLastMessage": "",
            "userUnreadMessages": "2",
        },
    ])

    const [selectedUser, setSelectedUser] = useState({})

    function selectedUserSetter(info, infoValue) {
        setSelectedUser((oldselectedUserInfo) => ({
            ...oldselectedUserInfo,
            [info]: infoValue,
        }))
    }

    // useEffect(() => {
    //     const updatedUsers = users.map((user) => {
    //         if (user.userMobileNo === selectedUser.userMobileNo) {
    //             return { ...user, userUnreadMessages: "" };
    //         }
    //         return user;
    //     });
    
    //     setUsers(updatedUsers);
    // }, [selectedUser])

    useEffect(() => {
        const userToUpdate = users.find((user) => user.userMobileNo === selectedUser.userMobileNo);
    
        if (userToUpdate) {
            userToUpdate.userUnreadMessages = "";
            setUsers([...users]);
        }
    }, [selectedUser]);
    
    function getLastMessageText(userMobileNo) {
        if (chats.length > 0) {
            const filteredChats = chats.filter(chat => chat.userMobileNo === userMobileNo);

            if (filteredChats.length > 0) {
                const sortedChats = filteredChats.sort((a, b) => b.messageId - a.messageId);

                const lastMessageText = sortedChats[0].messageText;

                return lastMessageText;
            }
        }

        return null;
    }

    // console.log("chats from index",chats)
    return (
        <>
            <Grid
                container
                direction="row"
                sx={{
                    bgcolor: "#111b21",
                    display: "flex",
                    // padding: "1.25%",
                    boxSizing: "border-box"
                }}
            >
                <Left
                    chats={chats}
                    allButtons={allButtons}
                    setAllButtons={setAllButtons}
                    allButtonsSetter={allButtonsSetter}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    personalInfo={personalInfo}
                    personalInfoSetter={personalInfoSetter}
                    users={users}
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                    getLastMessageText={getLastMessageText}
                />
                <Divider
                    orientation="vertical"
                    sx={{
                        // bgcolor: "#262f34",
                        bgcolor: "#313d45",
                    }}
                />
                {
                    Object.values(selectedUser).length > 0 ?
                        <Right
                            users={users}
                            setUsers={setUsers}
                            chats={chats}
                            setChats={setChats}
                            selectedUser={selectedUser}
                            selectedUserSetter={selectedUserSetter}
                            updateUsers={updateUsers}

                        />
                        :
                        <DefaultRightPannel />
                }
            </Grid>
        </>
    )
}
