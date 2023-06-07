import React, { useState } from 'react';
import './TodoList.css';

const ReactLearningRoadmap = () => {
  const [completedWeeks, setCompletedWeeks] = useState([]);

  const handleCheckboxChange = (week) => {
    if (completedWeeks.includes(week)) {
      setCompletedWeeks(completedWeeks.filter((completedWeek) => completedWeek !== week));
    } else {
      setCompletedWeeks([...completedWeeks, week]);
    }
  };

  const renderWeeks = () => {
    const weeks = [
      {
        number: 1,
        title: 'Getting Started with React',
        description: 'Learn the basics of HTML, CSS, and JavaScript if you\'re not already familiar with them. Install Node.js and npm on your computer if you haven\'t already. Read the React documentation to understand what it is and how it works.',
        resources: [
          { name: 'React Documentation', link: 'https://reactjs.org/docs/getting-started.html' },
          { name: 'Node.js Installation', link: 'https://nodejs.org/en/download/' },
        ],
        video: 'Ma6DRDIedVE', // YouTube video ID for Week 1
      },
      {
        number: 2,
        title: 'Creating a Simple React Component',
        description: 'Learn how to create a simple React component. Understand the concept of JSX and how it allows you to write HTML-like syntax in JavaScript. Explore the React component lifecycle and how to manage state.',
        resources: [
          { name: 'React Components', link: 'https://reactjs.org/docs/components-and-props.html' },
          { name: 'React JSX', link: 'https://reactjs.org/docs/introducing-jsx.html' },
        ],
        video: 'Ib-80HIjuZ4', // YouTube video ID for Week 2
      },
      
      {
        number: 3,
        title: 'Managing State with Hooks',
        description: 'Learn about React Hooks, specifically the useState and useEffect hooks. Understand how to manage state and side effects in functional components. Dive deeper into component re-rendering and optimization.',
        resources: [
          { name: 'React Hooks', link: 'https://reactjs.org/docs/hooks-intro.html' },
          { name: 'React useEffect Hook', link: 'https://reactjs.org/docs/hooks-effect.html' },
        ],
        video: 'O6P86uwfdR0', // YouTube video ID for Week 3
      },
      {
        number: 4,
        title: 'React Routing and Navigation',
        description: 'Learn how to implement routing and navigation in your React applications. Understand the basics of React Router and how to create dynamic routes, nested routes, and handle URL parameters.',
        resources: [
          { name: 'React Router Documentation', link: 'https://reactrouter.com/web/guides/quick-start' },
          { name: 'React Router Tutorial', link: 'https://www.taniarascia.com/react-router-tutorial/' },
        ],
        video: 'Ul3y1LXxzdU', // YouTube video ID for Week 4
      },
      {
        number: 5,
        title: 'Managing Forms in React',
        description: 'Learn how to handle form inputs and validation in React. Explore techniques for managing form state, handling user input, and performing form submission. Get familiar with popular form libraries like Formik or React Hook Form.',
        resources: [
          { name: 'React Forms', link: 'https://reactjs.org/docs/forms.html' },
          { name: 'Formik', link: 'https://formik.org/docs/overview' },
          { name: 'React Hook Form', link: 'https://react-hook-form.com/get-started' },
        ],
        video: 'oPteQFUK42w', // YouTube video ID for Week 5
      },
      {
        number: 6,
        title: 'Working with APIs in React',
        description: 'Learn how to fetch data from APIs and integrate it into your React applications. Understand concepts like asynchronous JavaScript, promises, and how to handle data fetching and error states. Explore popular libraries like Axios or the built-in Fetch API.',
        resources: [
          { name: 'AJAX and APIs in React', link: 'https://reactjs.org/docs/faq-ajax.html' },
          { name: 'Axios', link: 'https://axios-http.com/docs/intro' },
        ],
        video: 'rpg1jOvGCtQ', // YouTube video ID for Week 6
      }, 
      {
        number: 7,
        title: 'State Management with Redux',
        description: 'Learn how to manage global state in your React applications using Redux. Understand the Redux architecture, including actions, reducers, and the Redux store. Explore the concepts of immutability and unidirectional data flow.',
        resources: [
          { name: 'Redux Documentation', link: 'https://redux.js.org/introduction/getting-started' },
          { name: 'Redux Tutorial', link: 'https://www.valentinog.com/blog/redux/' },
        ],
        video: '1rP_yHj2dqg', // YouTube video ID for Week 7
      },
      {
        number: 8,
        title: 'React Hooks in Depth',
        description: 'Deep dive into advanced React Hooks concepts. Learn about custom hooks, context API, and how to create reusable logic and abstractions in your React applications. Explore popular custom hooks libraries like react-query or useSWR.',
        resources: [
          { name: 'React Custom Hooks', link: 'https://reactjs.org/docs/hooks-custom.html' },
          { name: 'React Context', link: 'https://reactjs.org/docs/context.html' },
          { name: 'react-query', link: 'https://react-query.tanstack.com/' },
          { name: 'useSWR', link: 'https://swr.vercel.app/' },
        ],
        video: 'O6P86uwfdR0', // YouTube video ID for Week 8
      },
      {
        number: 9,
        title: 'Testing React Applications',
        description: 'Learn how to write tests for your React components and applications. Understand the different testing frameworks and libraries available for React, such as Jest and React Testing Library. Explore techniques like unit testing, integration testing, and snapshot testing.',
        resources: [
          { name: 'Testing Overview', link: 'https://reactjs.org/docs/testing.html' },
          { name: 'Jest', link: 'https://jestjs.io/docs/getting-started' },
          { name: 'React Testing Library', link: 'https://testing-library.com/docs/react-testing-library/intro' },
        ],
        video: 'ML5egqL3YFE', // YouTube video ID for Week 9
      },
      {
        number: 10,
        title: 'Performance Optimization in React',
        description: 'Learn how to optimize the performance of your React applications. Understand techniques like memoization, code splitting, lazy loading, and virtualization. Explore tools like React DevTools and analyze performance using browser developer tools.',
        resources: [
          { name: 'React Performance', link: 'https://reactjs.org/docs/optimizing-performance.html' },
          { name: 'React DevTools', link: 'https://reactjs.org/blog/2019/08/15/new-react-devtools.html' },
        ],
        video: 'tbBILjDgXb4', // YouTube video ID for Week 10
      },
      {
        number: 11,
        title: 'Server-Side Rendering with Next.js',
        description: 'Learn about server-side rendering (SSR) in React using Next.js. Understand the benefits of SSR and how to build React applications that render on both the server and client. Explore serverless functions and static site generation with Next.js.',
        resources: [
          { name: 'Next.js Documentation', link: 'https://nextjs.org/docs/getting-started' },
          { name: 'Next.js Tutorial', link: 'https://nextjs.org/learn' },
        ],
        video: 'WAMqFdCFotY', // YouTube video ID for Week 11
      },
      {
        number: 12,
        title: 'Deployment and Continuous Integration',
        description: 'Learn how to deploy your React applications to production environments and set up continuous integration (CI) and continuous deployment (CD) pipelines. Explore popular deployment platforms like Netlify, Vercel, or AWS Amplify. Understand how to automate the build and deployment process for your React projects.',
        resources: [
          { name: 'Netlify', link: 'https://www.netlify.com/' },
          { name: 'Vercel', link: 'https://vercel.com/' },
          { name: 'AWS Amplify', link: 'https://aws.amazon.com/amplify/' },
        ],
        video: 'tK5jADD53VA', // YouTube video ID for Week 12
      }
 
    ];

    return weeks.map((week) => (
      <div className="week" key={week.number}>
        <h3>{`Week ${week.number}: ${week.title}`}</h3>
        <p>{week.description}</p>
        <p>
        <h4 className="resources-container-h4">Resources:</h4>
          {week.resources.map((resource, index) => (
            <span key={index}>
              <a href={resource.link}>{resource.name}</a>
              {index !== week.resources.length - 1 && ', '}
            </span>
          ))}
        </p>
        {week.video && (
          <div className="video-container">
            
            <h4>Video resourses:</h4>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${week.video}`}
              title={`Week ${week.number} Video`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <label>
          <input
            type="checkbox"
            checked={completedWeeks.includes(week.number)}
            onChange={() => handleCheckboxChange(week.number)}
          />
          Completed
        </label>
      </div>
    ));
  };

  return (
    <div className="react-learning-roadmap">
      <h1>React Learning Roadmap</h1>
      {renderWeeks()}
    </div>
  );
};

export default ReactLearningRoadmap;
