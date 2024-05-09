export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "department",
      headerName: "Department",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.department}`}>
            {params.row.department}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Rohit",
      img:"https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      department: "IT",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
        id: 2,
      username: "Anant Kumar",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "2snow@gmail.com",
      department: "Ad Department",
      age: 42,
    },
    {
        id: 3,
      username: "Ram",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "3snow@gmail.com",
      department: "IT",
      age: 45,
    },
    {
        id: 4,
      username: "Shyaam",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      department: "Sales Executive",
      age: 16,
    },
    {
        id: 5,
      username: "Karun",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "5snow@gmail.com",
      department: "IT",
      age: 22,
    },
    {
        id: 6,
      username: "Tannia",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "6snow@gmail.com",
      department: "IT",
      age: 15,
    },
    {
        id: 7,
      username: "Neha",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "7snow@gmail.com",
      department: "Sales Executive",
      age: 44,
    },
    {
        id: 8,
      username: "Susma",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "8snow@gmail.com",
      department: "Assitant Director",
      age: 36,
    },
    {
        id: 9,
      username: "Jaya",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "snow@gmail.com",
      department: "Control Board",
      age: 65,
    },
    {
        id: 10,
      username: "Roxie",
      img: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      email: "snow@gmail.com",
      department: "Sales Executive",
      age: 65,
    },
  ];