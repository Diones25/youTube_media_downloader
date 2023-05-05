import axios from "axios";

const url = 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details';

const api = axios.create({
  url: url,
  const language = "pt-BR"

  params: {
    videoId: 'G33j5Qi4rE8' // deve ser um parãmetro da url
  },
  headers: {
    'X-RapidAPI-Key': '657511860bmshc64d95031b8d75cp1a1e0bjsn725a1c9d6249',
    'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
  },
  language: language
});

