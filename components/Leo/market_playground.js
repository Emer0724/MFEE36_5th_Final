import Card from '@/components/Leo/market_card'
import ca from './market_playground.module.css'

export default function Playground() {
  return (
    <>
      <div className={`container ${ca.box}`}>
        <div className={`row ${ca.c_row} d-flex`}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={`row ${ca.c_row} d-flex`}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={`row ${ca.c_row} d-flex`}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={`row ${ca.c_row} d-flex`}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}
