import Student from './Student';

import StudentReview from './StudentReview';

function MainBody() {
  const number = 3;
  return (
    <div style={{ minHeight: " 70vh  " }}>
      <p>In this course, we will learn react js by building TaskOPedia</p>
      <p>Total Lecture - {number}</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
      <div className="container row">Student  Enrolled</div>
      <Student exprience={2} name="John Mike"
        headshot="https://api.lorem.space/image/face?w=150&h=130">
        <StudentReview/>
      </Student>
      <Student exprience={5} name="Angel Patrice"
        headshot="https://api.lorem.space/image/face?w=150&h=123">
          <StudentReview/>
      </Student>
      <Student exprience={7} name="Roger Bravo" 
      headshot="https://api.lorem.space/image/face?w=150&h=139" >
      </Student>
    </div>

  );
}

export default MainBody;