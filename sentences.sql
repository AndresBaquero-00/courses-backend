-- Generar consulta SQL que me permita saber cuántos cursos se tienen por modalidad

select m.name "modalidad", count(*) from courses c 
inner join modalities m on c.modality_id = m.id
group by m.name;

-- Generar consulta SQL que me permita saber la cantidad de estudiantes por estado de
-- matrícula en cada curso

select c.name "curso", ist.name "estado", count(*) from users u
inner join user_course uc on uc.user_id = u.id
inner join courses c on uc.course_id = c.id
inner join inscription_status ist on uc.inscription_status_id = ist.id
where u.role_id = 4
group by c.name, ist.name;

-- Generar consulta SQL que me permita saber el promedio de estudiantes registrados en
-- el sistema, el curso con más inscriptos y el curso con menos inscriptos.

