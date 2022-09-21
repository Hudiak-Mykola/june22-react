
function Coment(props) {
    const {coment} = props;
   return(
        <div>
          id: {coment.id} <br/> postId: {coment.postId} <br/>  body: {coment.body}
        </div>
    );
}

export default Coment;