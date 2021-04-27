import React from 'react'

import { render, waitForElement } from '@testing-library/react'

import Todo from './Todo'

describe ('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        const { getByTestId} = render (<Todo/>)//renderizar o componente
        const fieldNode = await  waitForElement(//buscar o input
            () => getByTestId('form-field')
        )
        console.log(fieldNode)
        //renderizar o componente
        //buscar o input
        //digitar no input
        //buscar o botao
        //clicar no botao
        //buscar a tabela
        //verificar se a tarefa foi aficionada na tabela
        
    })
} )