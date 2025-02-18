import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box
}
from "@chakra-ui/react";
import { useState } from "react";


function ComponenteModal ({ data, setData, dataEdit, isOpen, onClose }) {
    const [nome, setNome] = useState(dataEdit.nome|| "");
    const [marca, setMarca] = useState(dataEdit.marca || "");
    const [cor, setCor] = useState(dataEdit.cor || "");
    const [ano, setAno] = useState(dataEdit.ano|| "");
    
    


    const handleSave = () => {
        if (!nome || !marca) return;
    
        if (VerificaMarca()) {
          return alert("Ops, marca já cadastrada!");
        }
    
        if (Object.keys(dataEdit).length) {
          data[dataEdit.index] = { nome, marca, cor, ano };
        }
    
        const newDataArray = !Object.keys(dataEdit).length
          ? [...(data ? data : []), { nome, marca, cor, ano }]
          : [...(data ? data : [])];
    
        localStorage.setItem("cad_carro", JSON.stringify(newDataArray));
    
        setData(newDataArray);
    
        onClose();
      };
    
      const VerificaMarca = () => {
        if (dataEdit.marca !== marca && data?.length) {
          return data.find((item) => item.marca === marca);
        }
    
        return false;
      };
    
    return(
        <>

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Carros</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Marca</FormLabel>
                <Input
                  type="text"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Cor</FormLabel>
                <Input
                  type="text"
                  value={cor}
                  onChange={(e) => setCor(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Ano</FormLabel>
                <Input
                  type="text"
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        
        </>
    )
}


export default ComponenteModal