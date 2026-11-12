import Header from '../components/Header.jsx';
import FormContainer from '../components/FormContainer.jsx';
import StudentList from '../components/StudentList.jsx'

 const StudentPage = () => {
    const students = [

        { id: 1, name: 'riyo dominic',srcode:'24-14602', program: 'BSIT' },
        { id: 2, name: 'kyle bibat',srcode:'23-12602', program: 'BSIT' },
        { id: 3, name: 'cyril de lunas',srcode:'22-11602', program: 'BSIT' },
    ];

    const getData =async () => {
       const response = await fetch('http://127.0.0.1:3000/student/all');

       if (!response.ok) {
        throw new Error(response.status);
       } 

       const data = response.json();
       return data;
    }

    getData().then((result) => {
        console.log(result)
    }).catch((e) => {
        console.log(e)
    })

  return (

  <>

  <Header/>
  <FormContainer/>
  <StudentList data={students} />


  </>
  )

}




export default StudentPage;