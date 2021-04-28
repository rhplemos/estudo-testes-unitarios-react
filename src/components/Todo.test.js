import React from 'react'

import { fireEvent, render, waitForElement } from '@testing-library/react'

import Todo from './Todo'

describe ('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        const { getByTestId} = render (<Todo/>) //renderizar o componente
        const fieldNode = await  waitForElement( //buscar o input
            () => getByTestId('form-field')
        )
        const newTask = 'testing'
        fireEvent.change( //digitar no input
            fieldNode , 
            {target: {value: 'newTask'}}
        )
        expect(fieldNode.value).toEqual('newTask')

        const btnNode = await waitForElement( //buscar botão
            () => getByTestId('form-btn')
        )
        fireEvent.click(btnNode) //clicar no botão

        const tableNode = await waitForElement( //buscar tabela
            () => getByTestId('table')  
        )
        //renderizar o componente
        //buscar o input
        //digitar no input
        //buscar o botao
        //clicar no botao
        //buscar a tabela
        //verificar se a tarefa foi aficionada na tabela
        
    })
} )