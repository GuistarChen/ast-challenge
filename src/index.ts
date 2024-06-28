const t = require('@babel/types');


export default (queryInterface,hookName,requestType,responseType,querySerMetName,keyName ) => {


    const ast = t.file(  t.program(
        [
            t.ExportNamedDeclaration(
           
                     t.tsInterfaceDeclaration(
                            t.identifier(queryInterface),
                            t.TSTypeParameterDeclaration(
                                [t.tsTypeParameter(null,null,"TData")]
                            ),
                            [
                                t.tsExpressionWithTypeArguments(
                                    t.identifier('ReactQueryParams'),
    
                                    
                                        t.tsTypeParameterInstantiation(
                                             [
                                                t.tsTypeReference(t.identifier(responseType) ),
                                                t.tsTypeReference(t.identifier('TData') )  ,
                                            ]
            
                                        )
                                    
                                 
    
                                )
                            ],                            
                            t.tsInterfaceBody(
                                [
                                    t.tsPropertySignature(
                                        t.identifier("request"),
                                        t.tsTypeAnnotation(t.tsTypeReference(t.identifier(requestType)))
                                    )
                                ]
                            )
                        ),
                      
                     
                    ),
            t.variableDeclaration(
                "const",
                [  
                    t.variableDeclarator(
                        t.identifier(hookName),
                        t.arrowFunctionExpression(
                            [
                                t.objectPattern(
                                    [  t.objectProperty(
        
                                        t.identifier('request'),
                                        t.identifier('request')
            
                                    ),
                                    t.objectProperty(
                                        
                                        t.identifier('options'),
                                        t.identifier('options')
            
                                    )],
                                    t.tsTypeAnnotation(
                                        t.tsTypeReference(t.identifier(queryInterface))  ,
                                        t.tsTypeParameterInstantiation(
                                        
                                                [
                                                    t.tsTypeReference(t.identifier('TData')) ,
                                                ],
                                            
                                          
                                        )
                                    ),
                                )
                              
                            ],
                        
                            t.blockStatement([
                                t.returnStatement(
                                    t.callExpression(
                                        t.identifier('useQuery'),
                                        [
                                            t.arrayExpression([
                                                t.stringLiteral(keyName),
                                                t.identifier('request'),
            
                                            ]),
                                            t.arrowFunctionExpression(
                                                    [],
                                                    t.blockStatement([
                                                        t.ifStatement(
                                                            t.unaryExpression(
                                                                "!",
                                                                t.identifier('queryService')
                                                            ),
                                                            t.throwStatement(
                                                                t.newExpression(
                                                                    t.identifier("Error"),
                                                                    [
                                                                        t.stringLiteral("Query Service not initialized"),
                        
                                                                    ]
                                                                ),
                                                              
                                                            ),
                                                        
                                                        ),
                                                        t.returnStatement(
                                                            t.callExpression(
                                                                t.memberExpression(
                                                                    t.identifier("queryService"),
                                                                    t.identifier(querySerMetName),
                                                                    false,
                                                                ),
                                                                [ t.identifier("request")]
        
                                                            )
                                                        )
                                                    
                                                    ])
                                                
                                               
                                            ),
                                            t.identifier("options")
    
                                        ],
                                        t.tsTypeParameterInstantiation(
                                                [
                                                    t.tsTypeReference( t.identifier(responseType)) ,
                                                    t.tsTypeReference( t.identifier("Error")) ,
                                                    t.tsTypeReference(t.identifier("TData"))  
                                                ]
                                            )
                                        
                                        
                                    )
                                )
                            ]),
                            false,
                            false,
                            null,
                            t.tsTypeParameterDeclaration(
                                [
                                    t.tsTypeParameter(
                                        null,
                                        t.tsTypeReference(t.identifier(responseType)),
                                        "TData"
                                    )
                                ]
                            )
        
                        )
                    ),
                
                ]
              
            )
        ]
    ))
    return    ast
   

};
