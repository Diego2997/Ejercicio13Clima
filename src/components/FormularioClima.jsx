import { Form,Button, Container, Alert } from "react-bootstrap";
import {useForm} from 'react-hook-form'
import { useState} from "react";
import InfoClima from "./InfoClima";

const FormularioClima = () => {
    const [error,setError] = useState(null)
    const [clima,setClima] = useState({})
    const {register,handleSubmit,formState:{errors}} = useForm()
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "f95a0a7b5dee07e2a87262bf53db9d62"


    const onSubmit= (data) =>{
      const ubicacionSinEspacios = data.ubicacion.replace(/ /g, "") // para ciudades que sean mas de una palabra

        const consultarAPI = async() =>{
         try {
          const respuesta = await fetch(`${url}?q=${data.ubicacion},${data.pais}&appid=${API_KEY}`)
          if(respuesta.ok){
            const dataAPI = await respuesta.json()
            setClima(dataAPI)

          }else{
            throw new Error("No se encontraron los datos de la ciudad solicitada")
          }
         } catch (error) {
          setError(error.message)
         }
        }
        consultarAPI()
    }
    return (
      <>
      <Container className="text-light">
          <Form 
          className="d-flex justify-context-center align-items-center flex-column w-50 bg-dark bg-opacity-75 m-auto"
          onSubmit={handleSubmit(onSubmit)}
          >
      <Form.Group className="mb-3" controlId="ubicacion">
        <Form.Label className="fw-bold">Ubicacion</Form.Label>
        <Form.Control type="text" placeholder="Ingresa la ubicacion" {...register("ubicacion")}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="pais">
        <Form.Label className="fw-bold">Pais</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el pais" {...register("pais")}/>
      </Form.Group>

          { error && <Alert variant="danger">{error}</Alert>}
      <Button variant="info" className="fw-bold" type="submit">
        Consultar
      </Button>
    </Form>
      </Container>
      <InfoClima clima={clima}/>
      </>
    );
};

export default FormularioClima;