import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export default function Consulta()
 {

    const navigate = useNavigate();
    const [alunos, setAlunos] = useState([])

    //Função para bsucar os usuários da API
    async function consultaAlunos()
    {
        try{

            const response = await axios.get('http://localhost:3001/alunos');
            setAlunos(response.data);
        }catch (error) {
            alert(error);
        }
    };

    // Buscar usuário ao carregar o componente
    useEffect(() => {
        consultaAlunos();
    }, []);

    function alterar(id)
    {
        navigate("/alteracao/" + id);
    }

    function excluir(id)
    {
        navigate("/exclusao/" + id);
    }

    return(
        <div>
            <h1 style={{textAlign:'center'}}>Lista de Alunos</h1>
            <p>
                tamanho: {alunos.length}
            </p>

            <table>
                <tr>
                    <th>Codigo</th>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Opções</th>
                </tr>
                {alunos.map(
                    (aluno, index) => (
                    
                        <tr>
                            <td>{aluno.codigo}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.cidade}</td>
                            <td>{aluno.estado}</td>
                            <td>
                                <button type='button' onClick={() => alterar(aluno.codigo)}>Alterar</button>
                                <button type='button' onClick={() => excluir(aluno.codigo)}>Excluir</button>
                            </td>
                        </tr>

                    )
                )}
            </table>

        </div>

    );
 }
