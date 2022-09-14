import SimpsonComponent from "./SimpsonComponent";
import '../css/simpsonStyle.css';
function SimpsonsCard() {
    return(
        <div className={'mainSimpson'}>
            <SimpsonComponent
            itemName={'Homer'}
            picture={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
            />
            <SimpsonComponent
                itemName={'Bart'}
                picture={'https://avatanplus.com/files/resources/mid/5979ca3286d1c15d83bdd578.png'}
            />
            <SimpsonComponent
                itemName={'Marge'}
                picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <SimpsonComponent
                itemName={'Maggie'}
                picture={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
            />
            <SimpsonComponent
                itemName={'Lisa'}
                picture={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />

        </div>


    )
}
export default SimpsonsCard;
