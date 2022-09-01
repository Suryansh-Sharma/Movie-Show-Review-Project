package com.suryansh.Service;

import com.suryansh.Entity.Role;
import com.suryansh.Entity.User;
import com.suryansh.Repository.RoleRepository;
import com.suryansh.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleRepository.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleRepository.save(userRole);

        User adminUser = new User();
        adminUser.setUserName("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userRepository.save(adminUser);
    }

    public User registerNewUser(User user) {
        Role role = roleRepository.findByRoleName("User");
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userRepository.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public Optional<User> checkIsUserAlreadyPresent(String name) {
        return userRepository.findByUserName(name);
    }

    public Optional<User> getAccountDetails(String name) {
        return userRepository.findById(name);
    }

    public void updateUserImage(String userName, String newImageName) {
        userRepository.updateUserPic(userName, newImageName);
    }

    public void updateUserPassword(String userName, String newPassword) {
        userRepository.updateUserPassword(userName, newPassword);
    }
}