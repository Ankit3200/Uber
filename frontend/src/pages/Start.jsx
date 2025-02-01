import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
        <div className=' bg-cover  bg-centre bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-5 flex justify-between flex-col w-full bg-red-400 '>
    <img className='w-20 ml-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABpaWkMDAwuLi7d3d2urq5aWlo8PDynp6eTk5Pl5eUbGxvq6ur29vby8vKdnZ2JiYlTU1NmZmbX19c1NTWBgYF3d3fm5ubLy8sRERFfX1+/v79tbW0nJydGRka2trYYGBhLS0vPz88iIiKPj4/jtRj5AAAC8ElEQVR4nO3abXOiMBSGYdMqFZEgWrVqsVq3//8v7gF1JJqw7kzD29zXp8oAc54JkxxCBwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoSW45FtVfh0UGN7zPquQobqcWPmVJqZByJpkqtGqrGi7VELA/ZQX4vGqvGi1Aiza/D+PEivyaN1uPBZiupvidhGE528pf6bLqg36czdbNImi7Hi9H6WMQ7rt+bLsUfWSPGuuki/HpT46ZL8IyE3UfC7iNhe71nL3bpxjjPTDhb2C9aff7zlFxWY+egt8ppXl7ijYQH90X7S5ceuE/J1df8JVVlfLsShlVXnYpTZtUJbXsHngSvdsXYlt4jjIR6p9wXTYvxkTbPcedcK3YJRlLs+vbzuZlm9C1Xpd5q+mVzpXa3X8/OpV8SsXUtejKyCczRMBNq537bSS4rZmFtveuZtyhW8Zt7PihN6kbCaFt+gA1anTd2TlXzTK0vYknFclHeUzMSzioeRXXeyZlUTqUnj4nuZe4yZuXz/idhfmF1whr3QvQxryi4CCe76fVBMluapxPmU3C+yEjC1zBwqHE1HMTqfnvwtHotIs4/jMPPJswuIyQJj62YU+P7p1Ekl34kKB98SGi/X6oua0x+Sp1D5WRLKM/uqoiYlQ49JHzJHp2f8WIx2MgfS8spuVo7b3tCeeVY5rW61sPKpvPSkQ1bMtUkSjk+JaXmID7deV/vFlUmrLPznro+tGzGX6U6dmbnvR9aLde3ZidJ7eeIP63ovA1RepQGoOZuq07X5btXHw7LfiTc4idf6VzdaMfJnLFPBnqgx0Yv3iMHeR+Kv9Ry9G5fWbpP1gadv7sPpYnt3QfggiSMi4kmmpKwo0jYfSTsPhJ2Hwm7j4TdR8Lu63/CQKnz5/64r2/AOg0GRUL9uernP9Dmat6obgAJu4+E3df/hGMJOG26CK+ipdr3c0f/phUf5QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePQX2W8jPuP3e0sAAAAASUVORK5CYII=" alt="" />
            <div className='bg-white pb-6 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get started with Uber</h2>
                <Link to='/login' className=' flex items-center  justify-center w-full bg-black text-white py-3 mt-5 rounded'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Start;