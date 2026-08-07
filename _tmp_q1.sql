SELECT u.email, p.is_admin, r.role
FROM auth.users u
LEFT JOIN public.profiles p ON p.user_id = u.id
LEFT JOIN public.admin_roles r ON r.user_id = u.id
WHERE u.email = 'weverseonlineshop@gmail.com';

