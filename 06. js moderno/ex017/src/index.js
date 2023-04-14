import dayjs from 'dayjs'
import './styles/index.css'

alert(`Amanhã será ${(dayjs()+1).format("DD/MM/YYYY")}`)