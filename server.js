const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())
// app.use(express.json())

const footballers = {
    'samuel eto\'o fills': {
                'name' : 'Samuel Eto\'o Fills',
                'born': '10 March 1981, Douala, Cameroon',
                'career start':'1992',
                'career end': '7 September 2019' ,
                'nationality' : 'Cameroonian, Spanish',
                'number' : '9 (FC Barcelona/Forward), 29 (Chelsea F.C/Forward), 16 (Real Madrid CF/Forward) ...',
                'spouse' : 'Georgette Eto\'o (m. 2007)',
                'children' : 'Lynn Eto\'o, Annie Eto\'o, Maelle Eto\'o, Sienna Eto\'o, Etienne Eto\'o',
                'image': 'https://media.premiumtimesng.com/wp-content/files/2021/12/Samuel-Etoo-to-stand-for-Cameroon-FA-president.jpg'
    },
    'george weah': {
        'name': 'George Weah',
        'born': '1 October 1966, Monrovia, Liberia',
        'career start': '1985',
        'career end': '2003',
        'nationality': 'Liberian',
        'number': '9 (Paris Saint-Germain F.C. / Forward)',
        'spouse': 'Clar Weah',
        'children': 'Timothy Weah, George Weah Jr., Tita Weah',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/4/42/President_George_Weah_in_2019_%28cropped%29.jpg'
      },
      'jay-jay okocha': {
        'name': 'Jay-Jay Okocha',
        'born': '14 August 1973, Enugu',
        'career start': '1990',
        'career end': '2008',
        'nationality': 'Nigerian',
        'number': '10 (Paris Saint-Germain F.C. / Midfielder), 44 (Hull City / Midfielder)',
        'spouse': 'Nkechi Okocha (m. 1997)',
        'children': 'Ajay Okocha, Daniella Okocha',
        'image': 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRDiC6kYQ2JJMxjvtxSccJM9wHaRG4o7E9XTha1nBjHZUjxfHkAAXBNsLVKi4BDGPJI'
      },
      'didier drogba': {
        'name': 'Didier Drogba',
        'born': '11 March 1978, Abidjan, Côte d’Ivoire',
        'career start': '1988',
        'career end': '8 November 2018',
        'nationality': 'Ivorian',
        'number': '11 (Chelsea F.C. / Forward)',
        'spouse': 'Lalla Diakité',
        'children': ' Isaac Drogba, Iman Drogba, Kieran Drogba',
        'image': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKZx-C8-LJcon9P4E20ML7J-qEYH0BFzCYdWSIANVT2qr3SnWq'
      },
      'abedi pele': {
        'name': 'Abedi Pele',
        'born': '5 November 1964, Kyebi, Ghana',
        'career start': '1978',
        'career end': '1998',
        'nationality': 'Ghanaian',
        'number': ' 10 (Olympique de Marseille / Midfielder)',
        'spouse': 'Maha Ayew',
        'children': 'Jordan Ayew, André Ayew, Ibrahim Ayew, Imani Ayew',
        'image': 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQpDc01iyqqw5C24wYLBzNuA49cC8t9NYArdS8wyUxm6nliPIYrNYrGB2fx7RMkUPaQ'
      },
      'nwankwo kanu': {
        'name': 'Nwankwo Kanu',
        'born': '1 August 1976, Owerri',
        'career start': '1991',
        'career end': '24 June 2010',
        'nationality': 'Nigerian',
        'number': ' 27 (Portmouth FC / Forward), 25 (Arsenal FC / Forward)',
        'spouse': 'Amarachi Kanu (m. 2004)',
        'children': 'Pinky Amarachi Kanu, Sean Chukwudi Kanu, Iyang Onyekachi Kanu',
        'image': 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQPIUgVXT9OhcPUiCce97nxbpDBgMPL97fsazZOEdCITPOkLURwHvqz2S4IV0ygR2ky'
      },
      'mohamed aboutrika': {
        'name': 'Mohamed Aboutrika',
        'born': '7 November 1978, Giza, Egypt',
        'career start': '1990',
        'career end': '20 December 2013',
        'nationality': 'Egyptian',
        'number': '22 (Al Ahly SC / Midfielder)',
        'spouse': 'N/A',
        'children': 'Ahmed Aboutrika, Seif Aboutrika, Roaqaya Aboutrika, Sedrah Aboutrika, Mawadah Aboutrika',
        'image': 'https://static.onzemondial.com/photo_article/439643/164529/1200-L-the-total-caf-champions-league-portrait-mohamed-aboutrika.jpg'
      },
      'rashidi yekini': {
        'name': 'Rashidi Yekini',
        'born': '23 October 1963, Kaduna',
        'career start': '1984',
        'career end': '1998',
        'nationality': 'Nigerian',
        'number': '9 (Nigeria / Striker)',
        'spouse': 'N/A',
        'children': 'Yemisi Yekini, Musidat Damilola Yekini, Omoyemi Yekini',
        'image': 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSKIKl5w7XIhc_xS_MsUAaRyCHDS66IO01ftC4wEXwYnPMNE80JUqZqKEs2dGFnQ4mb'
      },
      'frédéric kanouté': {
        'name': 'Frédéric Kanouté',
        'born': '2 September 1977, Sainte-Foy-lès-Lyon, France',
        'career start': '1998',
        'career end': '2010',
        'nationality': 'French, Malian',
        'number': '20 (Olympique Lyonnais / Forward), 11 (Beijing Guoan F.C. / Forward)',
        'spouse': 'Fatima Kanoute',
        'children': 'N/A',
        'image': 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT5B8NrFBhKZrdXk--apvmT1kowpddkm6PI0Zq_OpXa2OFM1tEkN_lgpKTPxzUWeTGt'
      },
     'unknown': {
                'name' : 'unknown',
                'born': 'unknown',
                'career start':'unknown',
                'career end': 'unknown' ,
                'nationality' : 'unknown',
                'number' : 'unknown',
                'spouse' : 'unknown',
                'children' : 'unknown',
                'image': 'unknown'
    },
        
}

app.get('/', (req, res) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:footballerName', (request, response) => {
    const footballersName = request.params.footballerName.toLowerCase()
    if(footballers[footballersName]) {
        response.json(footballers[footballersName])
    } else {
        response.json(footballers['unknown'])
    }
})
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running')
})