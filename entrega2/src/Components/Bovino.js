import React from 'react';
import { Button, Card, Footer, Navbar, Preloader } from "react-materialize";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Modal from 'react-modal';

const BOVINOS_QUERY = gql`{
    bovinos{
      codigo
      nombre
      partos
      peso
      propietario {
        nombreCompleto
      }
    }
  }`;

const Bovino = () => {

    const estadoInicial = {
        Codigo: "",
        Nombre: "",
        Peso: "",
        Partos: "",
        Codigo: "",
        Propietario: "",
    }

    const [ValoresForm, setValoresForm] = React.useState(estadoInicial);

    const [ModalAbierta, setModalAbierta] = React.useState(false);


    const handleChange = e => {
        setValoresForm({
            ...ValoresForm,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submit")
        console.log(ValoresForm)
    };

    return (
        <div>
            <Navbar className="verde" brand={<h6><b>Gestionar Bovino</b></h6>} alignLinks="left" />
            <Query query={BOVINOS_QUERY} >
                {({ data, loading, refetch }) => {
                    if (loading) { return (<Preloader className="alinear" flashing />); }

                    return (
                        <div>
                            {data === undefined
                                ? <React.Fragment />
                                : data.bovinos.map((bovino, index) => (
                                    <Card
                                        key={index}
                                        title={bovino.nombre}
                                    >
                                        <p>
                                            Codigo: {bovino.codigo}<br />
                                            Peso: {bovino.peso}<br />
                                            Total partos: {bovino.partos}<br />
                                            Propietario: {bovino.propietario.nombreCompleto}
                                        </p>
                                    </Card>
                                ))}
                        </div>
                    );
                }}
            </Query>
            <Button onClick={() => { setModalAbierta(true) }}
                floating={true}
                fab={true}
                icon="add"
                className="yellow darken-1"
                large={true}
            />
            <Modal isOpen={ModalAbierta} >
                <h5><b>Crear Bovino</b></h5>
                <p>Todos los campos con (*) son obligatorios</p>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label>Nombre del Bovino*</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="Nombre"
                            value={ValoresForm.Nombre}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Peso del Bovino*</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="number"
                            name="Peso"
                            value={ValoresForm.Peso}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Número de partos*</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="number"
                            name="Partos"
                            value={ValoresForm.Partos}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Código del Bovino*</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="Codigo"
                            value={ValoresForm.Codigo}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre del propietario*</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="Propietario"
                            value={ValoresForm.Propietario}
                            required
                        />
                    </div>
                    <Card title={ValoresForm.Nombre}>
                        <p>
                            Codigo: {ValoresForm.Codigo}<br />
                            Peso: {ValoresForm.Peso}<br />
                            Total partos: {ValoresForm.Partos}<br />
                            Propietario: {ValoresForm.Propietario}
                        </p>
                    </Card>
                    <Button type="submit">Guardar</Button>
                    <Button onClick={() => { setModalAbierta(false); setValoresForm(estadoInicial) }} type="submit">Cancelar</Button>
                </form>
            </Modal>
            <Footer className="verde static" copyrights="Dr.cow 2019 Copyright - todos los derechos reservados">
                <h5 className="white-text">
                    Dr.Cow
                </h5>
                <p className="grey-text text-lighten-4">
                    Trabajo Clase CES2
                </p>
            </Footer>
        </div >
    )
}
export default Bovino;