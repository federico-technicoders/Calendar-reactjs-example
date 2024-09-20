
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'

function App() {
    const  localizer = dayjsLocalizer(dayjs)
    const events = [
        {
            title: 'Evento de prueba 1',
            start: dayjs('2024-9-24T12:00:00').toDate(),
            end: dayjs('2024-9-24T13:00:00').toDate(),
        },

        {
            title: 'Evento de prueba 2',
            start: dayjs('2024-9-26T13:00:00').toDate(),
            end: dayjs('2024-9-26T14:00:00').toDate(),
        },
        {
            title: 'Evento de prueba 3',
            start: dayjs('2024-9-25T14:00:00').toDate(),
            end: dayjs('2024-9-25T15:00:00').toDate(),
        },
     
           
       
    ]
    return (
        <main style={{width: '100%'}}>
            <h1>Calendario</h1>
            <div style={{
                width: '90%',
                height: '70vh'
            }}>
                <Calendar 
                    localizer={localizer}
                    events={events}
                />
            </div>
        </main>
    )
}

export default App
