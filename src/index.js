const { APIManager } = require("./APIManager")
const { Renderer } = require("./Renderer")
import './style.css';
import 'jquery';


const renderer = new Renderer()
const apiManager = new APIManager()

const loadData = () => apiManager.loadData()
const renderData = () => renderer.render(apiManager.data)

$('#load-btn').on('click', loadData)
$('#display-btn').on('click', renderData)