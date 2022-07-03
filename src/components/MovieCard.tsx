import axios from "axios";
import { useEffect, useState } from "react";

interface MovieCardProps {
  img: string | null;
  title: string;
  description: string;
}

export function MovieCard(props: MovieCardProps) {
  return(
    <div className="w-full flex flex-col items-center px-6 gap-5 md:flex-row md: max-w-2xl">
        {props.img 
          ? 
            <img 
              src={`https://image.tmdb.org/t/p/original/${props.img}`}
              className="max-h-60"
            />
          :
            <strong>
              Sem Imagem
            </strong>
        }

      <div className="flex flex-col gap-5">
          {props.title !== " " && <h2 className="text-center font-bold text-xl md:text-left">
            {props.title}  
          </h2>}
        <p className="text-center md:text-left">
          {props.description}
        </p>
      </div>
    </div>
  )
}