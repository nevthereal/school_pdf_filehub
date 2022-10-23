import React from 'react'

import gg_1 from '../pdfs/Geomorphologie Zusammenfassung.pdf'
import gg_2 from '../pdfs/Geomorphologie Zusammenfassung (Teil 2) [updated].pdf'
import g_1 from '../pdfs/01_zusammenfassung_g [updated].pdf'
import bio_1 from '../pdfs/01_zusammenfassung_bio [updated].pdf'
import it_1 from '../pdfs/01_Informatik Begriffe [updated].pdf'

const Home = () => {
  return (
    <div>
      <header className='p-4 bg-black text-white rounded-b-2xl shadow-2xl'>
        <h1>Klasse 1h Zusammenfassungen:</h1>
      </header>

      <div className='p-4'>
        <div className='section'>
          <h2>Geomorphologie Teil 1 <span>(30. September 2022)</span>:</h2>
          <div className='flex gap-4 mt-4'>
            <a href={gg_1} target="_blank" rel="norefferer"><button>Preview</button></a>
            <a download href={gg_1}><button>Download</button></a>
          </div>
        </div>
        <div className='section'>
          <h2>Geomorphologie Teil 2: <span>(30. September 2022)</span></h2>
          <div className='flex gap-4 mt-4'>
            <a href={gg_2} target="_blank" rel="norefferer"><button>Preview</button></a>
            <a download href={gg_2}><button>Download</button></a>
          </div>
        </div>
        <div className='section'>
          <h2>Früh/Hochmittelalter: <span>(3. October 2022)</span></h2>
          <div className='flex gap-4 mt-4'>
            <a href={g_1} target="_blank" rel="norefferer"><button>Preview</button></a>
            <a download href={g_1}><button>Download</button></a>
          </div>
        </div>
        <div className='section'>
          <h2>Einführung Biologie, Zellbiologie<span>(7. October 2022)</span>:</h2>
          <div className='flex gap-4 mt-4'>
            <a href={bio_1} target="_blank" rel="norefferer"><button>Preview</button></a>
            <a download href={bio_1}><button>Download</button></a>
          </div>
        </div>
        <div className='section'>
          <h2>Zahlensysteme, Einführung in Python <span>(25. October 2022)</span>:</h2>
          <div className='flex gap-4 mt-4'>
            <a href={it_1} target="_blank" rel="norefferer"><button>Preview</button></a>
            <a download href={it_1}><button>Download</button></a>
          </div>
        </div>
        <footer>
          <p>Made by <a href="https://nevillebrem.com" target='_blank' rel='norefferer' className='link'>Neville Brem</a>. All Rights Reserved</p>
        </footer>
      </div>

    </div>
  )
}

export default Home