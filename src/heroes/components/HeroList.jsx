import { useMemo } from "react";
import { HeroCard } from "./";
import { getHeroesByPlublisher } from "../helpers"

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPlublisher(publisher), [publisher]);
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))

            }
        </div>
    )
}
