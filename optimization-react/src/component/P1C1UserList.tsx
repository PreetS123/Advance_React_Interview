

interface User{
id:number,
name:string,
}
interface UserListProps{
    users:User[];
}
const P1C1UserList: React.FC<UserListProps> = ({users}) => {
  return (
    <>
    <ul>
        {
            users?.map((ele)=>(
                <li key={ele.id}>{ele.name}</li>
            ))
        }
    </ul>
    </>
  )
}

export default P1C1UserList