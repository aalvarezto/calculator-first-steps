nombre_del_alumno = input("ingrese nombre del alumno: ")
apellido_del_alumno = input("ingrese apellido del alumno: ")
matematica = int(input("ingrese nota de Matematica: "))
literatura = int(input("ingrese nota de Literatura: "))
fisica = int(input("ingerese nota de Fisica: "))


print("\n====================")
print("Alumno:", nombre_del_alumno, apellido_del_alumno)

def promedio_del_alumno(mat_1, mat_2, mat_3):
    suma = mat_1 + mat_2 + mat_3
    promedio = suma / 3
    return round(promedio, 2)

promedio = promedio_del_alumno(matematica, literatura, fisica)

print("Promedio:", promedio)

if promedio >= 6:
    print("Aprobado.")
    if promedio >= 9:
        print("Alumno Destacado.")
elif promedio < 4:
    print("Insuficiente.")
else:
    print("A recuperatorio.")
    
print("====================\n")
