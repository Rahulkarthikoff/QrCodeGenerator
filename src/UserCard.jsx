const userData = [
    {
        name:"Rahul Karthikeyan",
        city:"Tirupur",
        description:"SDE-I" ,
        skills:["Machine Learning","Generative AI", "React", "Node", "UI/UX","Java"],
        online:true,
        profile : "images/Photo of Rahul.jpg"
    },
    {
        name:"Darshan Karthikeyan",
        city:"NewYork",
        description:"SDE-I" ,
        skills:["Angular","Deep Learning", "C++", "Node", "UI/UX","Java"],
        online:false,
        profile : "images/Photo of Rahul.jpg" 
    },
    {
        name:"Karthikeyan",
        city:"Coimbatore",
        description:"SDE-I" ,
        skills:["Generative AI","NLP", "React", "Python", "WebDevelopment","Java"],
        online:true,
        profile : "images/Photo of Rahul.jpg"
    }
];

function User(props) {
    return <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} alt="user" className="img"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="button">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return <>
  {
  userData.map((user, index) => (
    <User key={index}
    name={user.name}
    city={user.city}
    description={user.description}
    skills={user.skills}
    online={user.online}
    profile={user.profile} />
  ))
  }
  </>
}

// <User name="Rahul Karthikeyan" city="Tirupur"
//   description="SDE-I" skills={["Machine Learning","Generative AI", "React", "Node", "UI/UX","Java"]}
//   online={true} profile = "images/Photo of Rahul.jpg"/>
