import React from 'react';
import './CodePanel.css';
const CodePanel = () => {
    return (
        <div className="code">
            <div className="codePanel">
                &gt;Max.getOrigin() <br/>
                <span className="answer">&nbsp;=&gt; Seattle, WA<br/><br/>></span>
                &gt;Max.getJob() <br/>
                <span className="answer">&nbsp;=&gt; Amazon Software Engineer <br/><br/>></span>
                &gt;Max.getEducation() <br/>
                <span className="answer">&nbsp;=&gt; University of Washington, Seattle <br/><br/></span>
                &gt;Max.getMajor() <br/>
                <span className="answer">&nbsp;=&gt; [Math, Physics]<br/><br/></span>
                &gt;Max.getLanguages() <br/>
                <span className="answer">&nbsp;=&gt; ["Java", "Python", "TensorFlow", "HTML5", "CSS3", "SQL", "Bash", "JavaaScript", "PHP", "React", "Angular", "AWS", "MongoDB", "Node", "Express", "C/C++"] <br/><br/></span>
                &gt;Max.getResume() <br/>
                <span className="answer">&nbsp;=&gt; "<a target="_blank" href="./max_resume_19.pdf">maxtran.pdf</a>"<br/><br/></span>
                &gt;Max.email()<br/>
                <span className="answer">&nbsp;=&gt;<a target="_blank" href="mailto:maxtran3005@outlook.com">maxtran3005@gmail.com</a><br/><br/></span>
            </div>
            <div className ="console-output">
                <br/>System.out.println("Hello World!")|
            </div>
        </div>
    );
  }
  
  export default CodePanel;