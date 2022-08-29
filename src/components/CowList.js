

function CowList ({ cows, name }) {
    

return (
    <div className="loglist">
      
        <h3>{name}</h3>
        {cows.map((data) => (
        <div className="cowdetails" key={data.id}>
            <h4> {data.name} </h4>
            
            {/* <!-- <h5> {`${log.date} - ${log.time}`}</h5>
            <h5> {log.swell} </h5>
            <p> {log.note}</p> --> */}
            
            </div>
        ))}
    </div>
    )
}

export default CowList;