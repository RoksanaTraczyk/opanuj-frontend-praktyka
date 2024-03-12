import {Country} from '../types/Country.ts';

function CharacterList({countries}: { countries: Country[] }) {

    return (
        <div>
            {countries.length === 0 &&
                <p className="flex flex-col items-center">Country not found for specific filter</p>
            }
            <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {countries.map((country) => (

                    <li key={country.name.official} className="flex flex-col items-center">
                        <h3>{country.name.common}</h3>
                        <img style={{height: '250px', width: '300px'}} src={country.flags.png} alt={country.flags.alt}/>
                    </li>
                ))}
            </ol>
        </div>);
}

export default CharacterList;
