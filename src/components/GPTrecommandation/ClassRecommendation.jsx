import React, { useState } from 'react';
import axios from 'axios';
import useAxiosFetch from '../../hooks/useAxiosFetch';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

const ClassRecommendation = () => {
  const [prompt, setPrompt] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  // const axiosSecure = useAxiosSecure();
  const axiosFetch = useAxiosFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosFetch.post('/recommendations', { prompt }
      );
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }finally {
      setLoading(false);
    }
  };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={prompt} 
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Enter your learning goals..."
//         />
//         <button type="submit">Get Recommendations</button>
//       </form>
//       {recommendations.length > 0 && (
//         <ul>
//           {recommendations.map((rec, index) => (
//             <li key={index}>
//               <h3>{rec.course}</h3>
//               <p>{rec.explanation}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ClassRecommendation;

    return (
      <div>
        <div className="mt-20 pt-3">
          <h1 className="text-4xl font-bold text-center text-dark-primary">Class Recommendation</h1>
        </div>

        <div>
          <form  onSubmit={handleSubmit}>
            <div className="relative max-w-lg">
                
                <input
                    className="w-full rounded-full  focus:outline-secondary  border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your learning goals..."
                />

                <button
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-secondary dark: px-5 py-3 text-sm font-medium text-white transition hover:bg-opacity-60"
                    type="submit"
                    disabled = {loading}>
                    {loading ? 'Getting Recommendations...' : 'Go'}
                </button>
                {/* {recommendations && <h2 className='text-danger'>{recommendations}</h2>} */}
            </div>
          </form>

          {recommendations.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-4">Recommended Courses:</h3>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index} className="mb-4">
                <h4 className="text-xl font-semibold">{rec.course}</h4>
                <p>{rec.explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      )}



      </div>
    </div>
  )
}

export default ClassRecommendation