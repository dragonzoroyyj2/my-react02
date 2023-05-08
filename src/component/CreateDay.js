import useFetch from '../hooks/useFetch';
import { useNavigate  } from "react-router-dom";

export default function CreateDay(){
    const days = useFetch("http://localhost:3300/days");
    let navigate = useNavigate();

    function addDay(e){
        e.preventDefault();
    
            fetch(`http://localhost:3300/days/`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day : days.length + 1,
                }),
            })
            .then(res => {
                if(res.ok){
                    alert('생성이 완료 되었습니다');
                    navigate(`/`)
                }
            })
    }

    return (
        <div>
            <h3>현재 일수  : {days.length}일</h3>
            <button onClick={addDay}>day 추가</button>
        </div>
    );
}